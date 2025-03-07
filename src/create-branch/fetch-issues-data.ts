import fetch from 'node-fetch';
import {getHeaders, jiraApi, sprintDisplayName, toJson} from "./utils";
import ora from "ora";

interface Options {
    issues: any[];
    sprint: number
}

export async function fetchIssuesData({ issues, sprint }: Options) {
    if (!issues || !issues.length) {
        console.log(`There are no issues assigned to the provided user on sprint ${sprintDisplayName(sprint)}`);
        process.exit();
    }
    const fetching = ora('Loading issues data...').start();

    const issuesData = issues.map(({ key }) => fetch(jiraApi(`issue/${key}`), { headers: getHeaders() }));

    const responses = await Promise.all(issuesData);
    const result = await Promise.all(responses.map(toJson));
    fetching.succeed('Issues data loaded.');

    return result;
}

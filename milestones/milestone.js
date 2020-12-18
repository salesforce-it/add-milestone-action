const githubContext = JSON.parse(process.env.GH_CONTEXT)
const github = require('@actions/github');
const octokit = github.getOctokit(githubContext.token)

/**
 * Gets the milestone with the nearest 'dueOn'
 */
async function getCurrentMilestone() {
    const owner = githubContext.repository.split('/')[0]
    const repo = githubContext.repository.split('/')[1]
    const {data: milestones} = await octokit.issues.listMilestones({
        owner: owner,
        repo: repo,
        state: 'open',
        direction: 'asc'
    });
    const currentMilestone = milestones[0];
    console.log(`Current milestone: ${currentMilestone.title}`)
    return currentMilestone;
}

module.exports = {getCurrentMilestone}
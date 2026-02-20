# frozen_string_literal: true

changelog_file_contains_ticket_number = !`grep -Er "^([A-Z]*)\-" tools/changelog/`.empty?
new_line_missing_at_the_end_of_a_file = !`find tools/changelog/ -type f | xargs tail -c 1 | grep -v -e '^$' | grep -B1 -v -e '^==> '`.empty?

if !/(build|chore|docs|feat|fix|perf|refactor)\((back|front|infra)\):\s+(MISC|REVERT|NO\sJIRA|SUDR-[0-9]+?)(\s.+)$/.match?(gitlab.mr_title)
  fail('Your MR title format should have the following (`fix(front): SUDR-219 Fix something`) or be labelled as miscellaneous (`fix(front): NO JIRA changed something`)')
end

fail('Your changelog file should not contain the JIRA ticket number') if changelog_file_contains_ticket_number

warn('This MR is big, please consider splitting it up next time') if git.lines_of_code > 1000

unless gitlab.mr_json['source_branch'].include?('release/') || gitlab.mr_json['source_branch'].include?('hotfix/')
  changelog = git.diff_for_file('CHANGELOG.md')
  if changelog
    fail('You should not modify the CHANGELOG outside of release or hotfix branches')
  end
end

unless gitlab.mr_title.include?('MISC')
  added_changelogs = git.added_files.grep(/.*tools\/changelog\//).reject do |added_changelog|
    return git.diff_for_file(added_changelog)
  end
  modified_changelogs = git.modified_files.grep(/.*tools\/changelog\//).reject do |modified_changelog|
    return git.diff_for_file(modified_changelog)
  end
  if added_changelogs.count === 0 || modified_changelogs.count === 0
    fail('You may not have added a changelog file for this branch. Already added? Please update your changelog file with new changes')
  end
end

unless gitlab.mr_json['squash']
  warn('All merge requests should have their commits squashed when merging. Remember to check the "Squash commits" checkbox. You can do this by editing the Merge Request (Edit button top right). Once saved, re-run Danger by clicking the Red X next to the Pipeline, then click the retry button next to the danger task.')
end

if gitlab.mr_labels.empty?
  fail('Please choose a relevant labels for your merge request. Eg. `Backend` for backend tasks and `Frontend` for frontend tasks`')
end

if gitlab.mr_title.length > 72
  fail('The title of this merge requests it too long. Please use maximum 72 chars')
end

if gitlab.mr_body.empty?
  fail('Please provide a merge request description or choose a MR template')
end

if git.commits.length == 1 && !/^(build|chore|docs|feat|fix|perf|refactor)\((back|front|infra)\):\s+(MISC|REVERT|NO\sJIRA|SUDR-[0-9]+?)(\s.+)$/.match?(git.commits[0].message)
  fail('As your merge request contains a single commit, your commit message prefix is invalid. It should match the rules (e.g. `fix(front): SUDR-219 Fix something`) or be `fix(front): NO JIRA Fix something`')
end

if git.commits.size > 1 && git.commits.size <= 5
   warn('Your merge request has multiple commits. Please squash your commits if possible')
end

if git.commits.size > 5
    fail('Your merge request has multiple commits. Please squash your commits')
end

random_lgtm = format('https://media.giphy.com/media/%s/giphy.gif', %w[7TtvTUMm9mp20 YoB1eEFB6FZ1m aLdiZJmmx4OVW 4Z3DdOZRTcXPa].sample)
lgtm.check_lgtm image_url: random_lgtm, https_image_only: true

<?php

namespace Changelog {
    const CHANGELOG_PATH = __DIR__ . '/../../../CHANGELOG.md';
    const COMPARISON_URL_PATTERN = '[%s]: https://gitlab.ekino.com/sudlife/sudlife-cms/-/compare/%s...%s';

    const ENTRY_PATTERN = '* [%1$s](https://jira.ekino.com/browse/%1$s) %2$s';

    const JQL_QUERY_PATTERN = 'project IN (SUDR) AND key IN (%s)';

    function updateChangelog(?string $nextReleaseVersion = null, bool $dryRun = false)
    {
        chdir(implode(DIRECTORY_SEPARATOR, [__DIR__, '..', '..', '..']));

        $changelogSnippets = glob(implode(DIRECTORY_SEPARATOR, ['tools', 'changelog', '*']));

        $changes = [];
        $keys = '';
        foreach ($changelogSnippets as $changelogSnippet) {
            if (is_dir($changelogSnippet)) {
                continue;
            }

            $ticketRef = basename($changelogSnippet);
            $changelogEntry = trim(file_get_contents($changelogSnippet));
            $changes[] = sprintf(ENTRY_PATTERN, $ticketRef, $changelogEntry);
            $keys .= sprintf('%s,', $ticketRef);

            if ($dryRun) {
                printf('Found changelog snippet "%s": %s' . PHP_EOL, $changelogSnippet, $changelogEntry);
                continue;
            }

            exec(sprintf('git rm %s', $changelogSnippet), $commandOutput, $commandReturn);

            if ($commandReturn === 0) {
                printf('Removed changelog snippet "%s" from git index.' . PHP_EOL, $changelogSnippet);
            } else {
                printf(
                    'Could not remove changelog snippet "%s" from git index, please check yourself.' . PHP_EOL,
                    $changelogSnippet
                );
            }
        }

        echo PHP_EOL;

        if ($nextReleaseVersion !== null) {
            if (count($changes) === 0) {
                echo 'No changes found.';
            } else {
                addNextReleaseLines($changes, $nextReleaseVersion);
                echo 'Changelog file has been updated automatically.';

                echo implode(PHP_EOL, $changes) . PHP_EOL;

                $ticketQuery = sprintf(JQL_QUERY_PATTERN, rtrim($keys, ','));
                printf(PHP_EOL . 'Ticket search: https://jira.ekino.com/issues?jql=%s', urlencode($ticketQuery));
            }
        }

        echo PHP_EOL;
    }

    function addNextReleaseLines(array $changeLines, string $nextReleaseVersion)
    {
        $lines = file(CHANGELOG_PATH);

        $linesToInsert = [];
        $positionToInsert = 0;
        foreach ($lines as $n => $line) {
            $line = trim($line);

            if (substr($line, 0, 2) === '##') {
                $linesToInsert = array_merge([
                    sprintf('## [%s]', $nextReleaseVersion),
                    ''
                ], $changeLines, ['']);

                $positionToInsert = $n;
                break;
            }
        }

        array_splice($lines, $positionToInsert, 0, $linesToInsert);
        $lines = addComparisonLink($lines, $nextReleaseVersion);
        $lines[] = '';
        file_put_contents(CHANGELOG_PATH, implode("\n", array_map('trim', $lines)));
    }

    function addComparisonLink(array $lines, string $nextReleaseVersion): array
    {
        $lastComparison = trim($lines[count($lines) - 1]);

        preg_match('/\[(\d+\.\d+\.\d+)\]/', $lastComparison, $version);

        $lastVersion = $version[1];

        $lines[] = sprintf(COMPARISON_URL_PATTERN, $nextReleaseVersion, $lastVersion, $nextReleaseVersion);

        return $lines;
    }
}

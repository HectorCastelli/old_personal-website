import type { MarkdownInstance } from 'astro';
import { assert, expect, test, vi } from 'vitest';
import { getTopThreeTags } from './TagCloud.astro';

test('Only the top three tags with most posts are displayed', () => {
    function createPostWithTags(tags: string[]): MarkdownInstance<Record<string, any>> {
        return {
            frontmatter: {
                title: '',
                description: '',
                tags,
            },
            file: '',
            url: undefined,
            Content: vi.fn(),
            rawContent: vi.fn(),
            compiledContent: vi.fn(),
            getHeadings: vi.fn(),
            default: vi.fn(),
        }
    }
    const posts = [
        ...[...Array(3)].map(_=>createPostWithTags(['a'])),
        ...[...Array(3)].map(_=>createPostWithTags(['b'])),
        ...[...Array(4)].map(_=>createPostWithTags(['c'])),
        ...[...Array(3)].map(_=>createPostWithTags(['d'])),
        ...[...Array(3)].map(_=>createPostWithTags(['a','b'])),
    ];

    expect(getTopThreeTags(posts)).toStrictEqual(['a', 'b', 'c']);
})

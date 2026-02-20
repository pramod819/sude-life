import { css } from 'styled-components';

import {
  type PluginConfig,
  type Preset,
  setPluginConfig,
  defaultHtmlPreset,
  defaultMarkdownPreset,
} from '@_sh/strapi-plugin-ckeditor';

const defaultHtml: Preset = {
  ...defaultHtmlPreset,
  description: 'Editor',
  styles: `
    .ck {
      color: white;
    }
  `,
  editorConfig: {
    ...defaultHtmlPreset.editorConfig,
    placeholder: 'Type your content here',
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'undo',
      'redo',
      'insertTable',
      'link',
      '|',
      'sourceEditing',
    ],
    table: {
      contentToolbar: [ 'tableColumn', 'tableRow', 'tableHeader' ]
    }
  },
};

const defaultMarkdown: Preset = {
  ...defaultMarkdownPreset,
  description: 'Modified default Markdown editor',
  styles: css`
    .ck {
      --ck-editor-max-width: 1500px;
      --ck-editor-min-height: 700px;
      --ck-editor-max-height: 700px;
    }

    .ck.ck-editor__main {
      border: 3px dashed ${({ theme }) => theme.colors.warning500};
    }
  `,
};

const myConfig: PluginConfig = {
  presets: [defaultHtml, defaultMarkdown],
};

export default {
  register() {
    setPluginConfig(myConfig);
  },
};

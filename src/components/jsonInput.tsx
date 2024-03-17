'use client';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { json } from '@codemirror/lang-json';
import { indentWithTab } from '@codemirror/commands';

const basicExtensions = [basicSetup, json(), keymap.of([indentWithTab])];

import { useEffect, useRef } from 'react';

const JsonInput = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    const state = EditorState.create({
      doc: `{\n\n}`,
      extensions: [...basicExtensions, EditorView.editable.of(true)],
    });
    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, [editorRef.current]);

  return <div ref={editorRef} className="h-4"></div>;
};
export { JsonInput };

'use client';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
// import { json } from '@codemirror/lang-json';
import { yaml } from '@codemirror/lang-yaml';
import { indentWithTab } from '@codemirror/commands';

const yamlFile = `record:
  path: ""
  # mandatory
  command: ""
  proxyport: 0
  containerName: ""
  networkName: ""
  delay: 5
  buildDelay: 30s
  tests:
    filters:
      - path: ""
        urlMethods: []
        headers: {}
        host: ""
  stubs:
    filters:
      - path: ""
        host: ""
        port: 0
test:
  path: ""
  # mandatory
  command: ""
  proxyport: 0
  containerName: ""
  networkName: ""
  # example: "test-set-1": ["test-1", "test-2", "test-3"]
  selectedTests:
  # to use globalNoise, please follow the guide at the end of this file.
  globalNoise:
    global:
      body: {}
      header: {}
  delay: 5
  buildDelay: 30s
  ignoreOrdering: true
  apiTimeout: 5
  tests:
    filters:
      - path: ""
        urlMethods: []
        headers: {}
        host: ""
  stubs:
    filters:
      - path: ""
        host: ""
        port: 0
  withCoverage: false
  coverageReportPath: ""`;

const basicExtensions = [basicSetup, yaml(), keymap.of([indentWithTab])];

import { useEffect, useRef } from 'react';

const YAMLInput = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    const state = EditorState.create({
      doc: yamlFile,
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

  return (
    <div ref={editorRef} className="h-[50vh] overflow-scroll text-sm"></div>
  );
};
export { YAMLInput };

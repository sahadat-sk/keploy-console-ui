'use client';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const fetchRawResult = async (url: string) => {
  const data = await fetch(url);
  return data;
};

const data = {
  src: {
    'app.js': fetchRawResult(
      'https://raw.githubusercontent.com/keploy/samples-typescript/main/express-mongoose/src/app.js'
    ),
  },
};

export default function FileTree() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="express-mongoose">
        <TreeItem nodeId="5" label="src">
          <TreeItem nodeId="10" label="routes" />
          <TreeItem nodeId="11" label="app.js" />
        </TreeItem>
        <TreeItem nodeId="2" label="keploy">
          <TreeItem nodeId="4" label="test-set-0">
            <TreeItem nodeId="8" label="tests">
              <TreeItem nodeId="6" label="test-1.yaml" />
            </TreeItem>

            <TreeItem nodeId="7" label="mocks.yaml" />
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="12" label="config.yaml" />
      </TreeItem>
    </TreeView>
  );
}

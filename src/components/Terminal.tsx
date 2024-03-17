'use client';
// TerminalComponent.js
import React, { useRef, useEffect, useState } from 'react';
// import { Terminal } from 'xterm';
// import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const [terminal, setTerminal] = useState<any>(null);
  const [fitAddon, setFitAddon] = useState<any>(null);

  const executeCommand = (command: string) => {
    console.log('command is: ', command);
  };

  useEffect(() => {
    const init = async () => {
      const { Terminal } = await import('xterm');
      const { FitAddon } = await import('xterm-addon-fit');
      setTerminal(new Terminal());
      setFitAddon(new FitAddon());
    };
    if (!terminal || !fitAddon) {
      init();
    } else {
      terminal?.loadAddon(fitAddon);

      if (!terminalRef.current) return;
      terminal?.open(terminalRef.current);
      fitAddon.fit();
      terminal.write('Welcome to the interactive terminal!\r\n');
      let currLine = '';
      terminal.onKey((key: any) => {
        const keyCode = key.domEvent.code;
        if (keyCode == 'Enter') {
          terminal.write('\r\n');
          executeCommand(currLine.trim());
          currLine = '';
        } else if (keyCode == 'Backspace') {
          if (currLine) {
            currLine = currLine.slice(0, currLine.length - 1);
            terminal.write('\b \b');
          }
        } else {
          currLine += key.key;
          terminal.write(key?.key);
        }
      });
    }
    return () => {
      if (terminal) terminal.dispose();
    };
  }, [terminal, fitAddon]);

  return <div ref={terminalRef} />;
};

export default TerminalComponent;

const CodeSandBoxEmbed = () => {
  return (
    <iframe
      src="https://codesandbox.io/embed/72h3d?view=editor&module=%2Fsrc%2Findex.js"
      style={{
        width: '100%',
        height: 500,
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      title="files-and-folders"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};

export { CodeSandBoxEmbed };

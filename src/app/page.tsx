import { CodeSandBoxEmbed } from '@/components/CodeSandBoxEmbed';
import FileTree from '@/components/FileStructure';
import XTerm from '@/components/Terminal';
import { YAMLInput } from '@/components/YAMLInput';
import { JsonInput } from '@/components/jsonInput';

export default function Home() {
  return (
    <>
      {/* <JsonInput /> */}
      <div className="flex flex-col gap-4 w-screen">
        <div className="flex">
          <FileTree />
          <YAMLInput />
        </div>
        <XTerm />
      </div>

      {/* <CodeSandBoxEmbed /> */}
    </>
  );
}

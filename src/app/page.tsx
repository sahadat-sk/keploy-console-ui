import { CodeSandBoxEmbed } from '@/components/CodeSandBoxEmbed';
import XTerm from '@/components/Terminal';
import { YAMLInput } from '@/components/YAMLInput';
import { JsonInput } from '@/components/jsonInput';

export default function Home() {
  return (
    <>
      {/* <JsonInput /> */}
      <div className="flex flex-col gap-4">
        <YAMLInput />
        <div className="relative w-full">
          <div className="absolute w-full">
            <XTerm />
          </div>
        </div>
      </div>

      {/* <CodeSandBoxEmbed /> */}
    </>
  );
}

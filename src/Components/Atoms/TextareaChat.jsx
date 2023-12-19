import { Textarea } from '@mantine/core';

export default function TextareaChat() {
  return (
    <>
      <Textarea placeholder="Type your message" withAsterisk variant="unstyled" className="border-t border-l border-r px-3 rounded-tl-xl rounded-tr-xl bg-slate-50 pt-2" />
    </>
  );
}

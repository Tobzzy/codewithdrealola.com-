interface PromptProps {
  directory?: string;
  branch?: boolean;
  content: string;
}

const Prompt = ({ directory, branch = false, content }: PromptProps) => {
  return (
    <p>
      <span className="text-cyan-400 font-semibold">
        ~/toyibahmed{directory}
        <span className="text-red-500">{branch && " (main)"}</span> $
      </span>{" "}
      {content}
    </p>
  );
};

export default Prompt;

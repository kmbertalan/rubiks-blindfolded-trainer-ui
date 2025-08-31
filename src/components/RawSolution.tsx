type RawSolution = {
  readonly edgeSolution: string;
  readonly cornerSolution: string;
};

type RawSolutionProps = {
  rawSolution: RawSolution | null;
};

function RawSolution({ rawSolution }: RawSolutionProps) {
  return (
    <>
      {rawSolution && (
        <p>Your solution for edges: {rawSolution.edgeSolution}</p>
      )}
      {rawSolution && (
        <p>Your solution for corners: {rawSolution.cornerSolution}</p>
      )}
    </>
  );
}

export default RawSolution;

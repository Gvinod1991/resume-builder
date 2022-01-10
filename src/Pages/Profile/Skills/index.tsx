import { TagsInput, Wrapper, Typography } from "../../../Components";

export const Skills = () => {
  const selectedTags = (tags: Array<string>) => {
    //console.log(tags)
  }
  return (
    <Wrapper className="flex flex-col w-full">
      <>
        <Typography variant="h2" className="text-lg text-gray-600">Your skills</Typography>
        <TagsInput tagLabel="Type and hit enter key to add your skills" selectedTags={selectedTags} />
      </>
    </Wrapper>
  )
}
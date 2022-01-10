import { TagsInput, Wrapper, Typography } from "../../../Components";

export const Skills = () => {
  const selectedTags = (tags: Array<string>) => {
    //console.log(tags)
  }
  return (
    <Wrapper className="flex flex-row w-full">
      <>
        <Typography variant="h2" className="w-2/12 text-lg text-gray-600">Your skills</Typography>
        <Wrapper className='flex flex-col ml-2 px-4 w-10/12'>
          <TagsInput tagLabel="Type and hit enter key to add your skills" selectedTags={selectedTags} />
        </Wrapper>
      </>
    </Wrapper>
  )
}
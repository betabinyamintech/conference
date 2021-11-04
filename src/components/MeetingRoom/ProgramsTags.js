import { Tag } from "antd";
import { useState } from "react";

const { CheckableTag } = Tag;

//class HotTags extends React.Component {

const ProgramsTags = (tagsData) => {
  console.log(tagsData.tagsData);
  const [selectedTags, setSelectedTags] = useState(["Books"]);
  // const [visible, setVisible] = useState(false);
  // state = {
  //   loading: false,
  //   visible: false,
  // };

  // state = {
  //     selectedTags: ['Books'],
  //   };
  let HandleChange = (tag, checked) => {
    // handleChange(tag, checked) {
    setSelectedTags(selectedTags);
    // const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    //this.setState({ selectedTags: nextSelectedTags });
  };

  //   const { selectedTags } = this.state;
  return (
    <>
      {tagsData.tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => HandleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
};

export default ProgramsTags;

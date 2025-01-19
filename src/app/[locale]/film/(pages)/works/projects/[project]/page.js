import Video from "../../../../components/Video";

const VideoPage = async ({ params }) => {
  const par = await params;

  return (
    <>
      <Video projectId={par.project} modal={false} />
    </>
  );
};

export default VideoPage;

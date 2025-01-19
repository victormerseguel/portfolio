import Video from "../../../../../components/Video";

const VideoPageIntercepted = async ({ params }) => {
  const par = await params;

  return (
    <>
      <Video projectId={par.project} modal={true} />
    </>
  );
};

export default VideoPageIntercepted;

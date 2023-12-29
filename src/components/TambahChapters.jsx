import React, { useState } from "react";
import FormInput from "./form/FormInput";
import { useLocation } from "react-router-dom";
import { Button, Card } from "@material-tailwind/react";
import { postChapters } from "../services/create-chapters";
import { toast } from "react-toastify";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  *DONE
//TODO WARNA
export const TambahChapters = () => {
  const location = useLocation();
  const classId = location.pathname.split("/")[3];
  const [chapterData, setChapterData] = useState({
    no_chapter: "",
    title: "",
    videos: [
      {
        noVideo: "",
        titleVideo: "",
        linkVideo: "",
        timeVideo: "",
      },
    ],
    class_id: classId,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setChapterData({ ...chapterData, [id]: value });

    console.log(e.target.value, chapterData);
  };
  const handleParseIntInput = (e) => {
    const { id, value } = e.target;
    setChapterData({ ...chapterData, [id]: parseInt(value, 10) });
  };

  const handleVideoChange = (e, field, index) => {
    const updatedVideos = [...chapterData.videos];
    updatedVideos[index][field] = e.target.value;
    setChapterData({ ...chapterData, videos: updatedVideos });
    console.log(chapterData);
  };
  const handleParseIntVideoChange = (e, field, index) => {
    const updatedVideos = [...chapterData.videos];
    updatedVideos[index][field] = parseInt(e.target.value, 10);
    setChapterData({ ...chapterData, videos: updatedVideos });
    console.log(chapterData);
  };
  const handleAddVideo = () => {
    setChapterData({
      ...chapterData,
      videos: [
        ...chapterData.videos,
        { noVideo: "", titleVideo: "", timeVideo: "" },
      ],
    });
  };

  const handleRemoveVideo = (index) => {
    const removeVideo = [...chapterData.videos];
    removeVideo.splice(index, 1);
    setChapterData({ ...chapterData, videos: removeVideo });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formSubmit = {
      no_chapter: chapterData.no_chapter,
      title: chapterData.title,
      videos: chapterData.videos.map((video) => ({
        no_video: video.noVideo,
        title: video.titleVideo,
        link: video.linkVideo,
        time: video.timeVideo,
      })),
      class_id: chapterData.class_id,
    };
    try {
      await postChapters(formSubmit);
      toast.success("Chapter berhasil di tambahkan !");

      setChapterData({
        no_chapter: "",
        title: "",
        videos: [
          {
            noVideo: "",
            titleVideo: "",
            linkVideo: "",
            timeVideo: "",
          },
        ],
        class_id: classId,
      });
    } catch (error) {
      toast.error("chapter Gagal di tambahkan");
    }
  };

  return (

      <div>
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-2xl">
            Tambah Chapter dan Video
          </h1>
          <a href="/admin/kelola-kelas">
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" />{" "}
            <span className="text-xl px-2 font-semibold"> Kembali</span>
          </a>

          <Card className="w-full p-3 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
            <form onSubmit={handleSubmit}>
              <FormInput
                classNameLabel="!text-lg pt-5 px-2"
                name="Nomor Chapter"
                label="no_chapter"
                type="number"
                placeholder="Input No Chapter"
                value={chapterData.no_chapter}
                onChange={(e) => handleParseIntInput(e)}
              />
              <FormInput
                classNameLabel="!text-lg pt-5 px-2"
                name="Title Chapter"
                label="title"
                type="text"
                placeholder="Input Title Chapter"
                value={chapterData.title}
                onChange={(e) => handleInputChange(e)}
              />
              <div className="flex flex-row flex-wrap justify-center gap-y-3 gap-x-6 py-2">
                {chapterData.videos.map((video, index) => (
                  <Card className="w-[38rem] my-2 p-3 ">
                    <div key={index}>
                      <div className="flex flex-row items-center justify-between">
                        <h1>Data Video Ke : {index + 1}</h1>
                        <Button
                          variant="gradient"
                          color="red"
                          onClick={handleRemoveVideo}
                        >
                          Hapus Chapter
                        </Button>
                      </div>
                      <FormInput
                        name="Nomor Video"
                        label="noVideo"
                        type="number"
                        value={video.noVideo}
                        onChange={(e) =>
                          handleParseIntVideoChange(e, "noVideo", index)
                        }
                        placeholder="Input Nomor Video"
                      />
                      <FormInput
                        name="Judul Video"
                        label="judulVideo"
                        type="text"
                        value={video.titleVideo}
                        onChange={(e) =>
                          handleVideoChange(e, "titleVideo", index)
                        }
                        placeholder="Input Judul Video"
                      />
                      <FormInput
                        name="Durasi Video"
                        label="time"
                        type="number"
                        value={video.timeVideo}
                        onChange={(e) =>
                          handleParseIntVideoChange(e, "timeVideo", index)
                        }
                        placeholder="Input Durasi video"
                      />
                      <FormInput
                        name="Link Video"
                        label="link"
                        type="text"
                        value={video.linkVideo}
                        onChange={(e) =>
                          handleVideoChange(e, "linkVideo", index)
                        }
                        placeholder="Input Link Video"
                      />
                    </div>
                  </Card>
                ))}
              </div>
              <div className="flex justify-between">
                <Button variant="gradient" onClick={handleAddVideo}>
                  Tambah Video
                </Button>
                <Button variant="gradient" type="submit">
                  Submit Chapter
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
  );
};

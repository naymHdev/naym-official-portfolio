/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Pagination } from "antd";
import { useState } from "react";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = projects?.slice(startIndex, endIndex);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {currentProperties?.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
      <div className=" mt-8 flex justify-end items-end">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={projects?.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={false}
          itemRender={(item, type, originalElement) => (
            <li key={item.key} className="custom-bg text-white">
              {originalElement}
            </li>
          )}
        />
      </div>
    </motion.div>
  );
};

export default ProjectList;

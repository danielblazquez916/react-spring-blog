import React, { useState } from "react";
import Layout from "./Layout";
import BlogList from "./BlogList";
import BlogHeader from "./BlogHeader";
import CreatePostSection from "./CreatePostSection";

const Blog = ({page, setPage}) => {

    return (
        <Layout>
            <BlogHeader/>
            <CreatePostSection/>
            <BlogList page={page} setPage={setPage} />
        </Layout>
    );
}

export default Blog;
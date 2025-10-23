import React from "react";

const Comment = ({content, author, date}) => {

    const getFormattedDate = () => {

        const options_date = {
            year: "numeric",
            month: "long",
            day: "numeric",
        }

        const options_time = {
            hour: "numeric",
            minute: "numeric",
        }

        const date_formatted = new Date(date).toLocaleDateString("es-ES", options_date);
        const time_formatted = new Date(date).toLocaleTimeString("es-ES", options_time);

        return date_formatted + " a las " + time_formatted;
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{author}</h3>
            <p className="text-gray-700 text-sm mb-2">{getFormattedDate()}</p>
            <p className="text-gray-700">
              {content}
            </p>
        </div>
    );
}

export default Comment;
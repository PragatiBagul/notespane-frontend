import request from "./Request";
import { useState } from "react";
export const userSignJWTVerification = (user) => {
    const body = {
        "Name": user.displayName,
        "Email": user.email,
        "PhotoURL": user.photoURL,
        "id":user.uid
    }
    const requestUrl = 'http://localhost:8080/user';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
};

export const fetchUsers = () => {
    const requestUrl = 'http://localhost:8080/user/all';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const fetchUserProfile =(userId) => {
    const requestUrl = 'http://localhost:8080/user/'+userId;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const updateUserDetails = (body) => {
    const requestUrl = 'http://localhost:8080/user/update';
    const options = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}



export const createTopic = (body) => {
    console.log(body);
    const requestUrl = 'http://localhost:8080/topic/create/';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}

export const followAnotherUser = (userUid) => {
    const requestUrl = 'http://localhost:8080/follower/followUser/' + userUid;
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const updateTopic = () => {
    
}

export const deleteTopic = () => {
    
}

export const getTopic = () => {
    
}

export const getAllTopics = (userId) => {
    const requestUrl = 'http://localhost:8080/topic/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const getAllTopicsOfUser = (userId) => {
    const requestUrl = 'http://localhost:8080/topic/user/'+userId;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const createPost = (body) => {
    const requestUrl = 'http://localhost:8080/post/create/';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}

export const addPostContent = (content,postId) => {
    const requestUrl = `http://localhost:8080/post/${postId}/content/image`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: content,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}

export const fetchPostsByTopic = (topicId) => {
    const requestUrl = 'http://localhost:8080/post/ofTopic/'+topicId;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const fetchPostImage = (postId) => {
    const requestUrl = `http://localhost:8080/post/${postId}/content/image`;
    const options = {
        method: 'GET',
        headers: {
            'Access-Allow-Cross-Origin':"*"
        },
    };
    const res = request(requestUrl, options);
    return res;
}

export const fetchAllFlashCards = () => {
    const requestUrl = 'http://localhost:8080/flashcards/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}
export const fetchPosts = () => {
    const requestUrl = 'http://localhost:8080/post/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}


export const saveLike = (postId) => {
    const requestUrl = 'http://localhost:8080/like/post/' + postId;
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const deleteLike = (postId) => {
    const requestUrl = 'http://localhost:8080/like/post/' + postId;
    const options = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

//TaskApp Request Endpoints
export const createTask = (body) => {
    console.log(body);
    const requestUrl = 'http://localhost:8080/task/create';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const fetchTasks = () => {
    const requestUrl = 'http://localhost:8080/task/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const taskUpdate = (body) => {
    const requestUrl = 'http://localhost:8080/task/update';
    const options = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const taskDelete = (taskId) => {
    const requestUrl = 'http://localhost:8080/task/delete/' + taskId;
    const options = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

//Mock Tests Request Endpoints
//Fetch all personal mock tests
export const fetchMockTests = () => {
    const requestUrl = 'http://localhost:8080/mocktests/get';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
};

//Fetch a personal mock test
export const fetchMockTest = (id) => {
    const requestUrl = 'http://localhost:8080/mocktests/get/' + id;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
};

//Fetch all public mock tests
export const fetchPublicMockTests = () => {
    const requestUrl = 'http://localhost:8080/mocktests/getPublic';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

//Update mock test
export const updateMockTest = (body, id) => {
    const requestUrl = 'http://localhost:8080/mocktests/update/' + id;
    const options = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

//Delete Mock Test
export const deleteMockTest = (id) => {
    const requestUrl = 'http://localhost:8080/mocktests/delete/' + id;
    const options = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

//Create mock test
export const createMockTest = (body) => {
    const requestUrl = 'http://localhost:8080/mocktests/create/';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}

export const fetchFollowedTopics = (uid) => {
    const requestUrl = 'http://localhost:8080/follower/followers/user/  ' + uid;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res = request(requestUrl, options).then(response => response.data);
    return res;
}
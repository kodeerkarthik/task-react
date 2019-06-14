import React from 'react';

const Contact = ({list1 , list2}) => {
    return (
        <div>
            <div className ='card'>
                <div className="card-body">
                    <h1>Contact List1</h1>
                    <p>{list1.login}</p>
                    <p>{list1.id}</p>
                    <p>{list1.name}</p>
                    <p>{list1.avatar_url}</p>
                    <p>{list1.company}</p>
                </div>
            </div>
            <div className ='card'>
                <div className="card-body">
                    <h1>Contact List2</h1>
                    <p>{list2.userId}</p>
                    <p>{list2.id}</p>
                    <p>{list2.title}</p>
                    <p>{list2.body}</p>
                </div>
            </div>
        </div>
    );
};
export default Contact;
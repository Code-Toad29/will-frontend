// import React from 'react'

// export default function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }
// import React from 'react'
// import React, { useState } from 'react';


    
// const Contact = ({ agents }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//         agentId: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission (e.g., send data to an API)
//         console.log(formData);
//     };

//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Message:
//                     <textarea name="message" value={formData.message} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Contact Agent:
//                     <select name="agentId" value={formData.agentId} onChange={handleChange} required>
//                         <option value="">Select an agent</option>
//                         {agents.map((agent) => (
//                             <option key={agent.id} value={agent.id}>
//                                 {agent.name}
//                             </option>
//                         ))}
//                     </select>
//                 </label>
//                 <button type="submit">Send Message</button>
//             </form>
//         </div>
//     );
// };

// export default ContactPage;

//   )
// }

// export default Contact
import React, { useState } from 'react';

const Contact = ({ agents }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agentId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact Agent:
                    <select
                        name="agentId"
                        value={formData.agentId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an agent</option>
                        {agents.map((agent) => (
                            <option key={agent.id} value={agent.id}>
                                {agent.name}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;

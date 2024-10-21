const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '', agentId: '' });
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending your message.');
    }
};
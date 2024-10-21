const agents = [
    { id: 1, name: 'Agent A', email: 'agentA@example.com' },
    { id: 2, name: 'Agent B', email: 'agentB@example.com' },
    // Add more agents as needed
];

// In your App component or wherever you route to the contact page
<Route path="/contact" render={() => <ContactPage agents={agents} />} />

// src/UserProfileWithImmer.js
import React from 'react';
import { useImmer } from 'use-immer';

const UserProfileWithImmer = () => {
  const [userProfile, updateUserProfile] = useImmer({
    name: 'Jane Doe',
    email: 'jane@example.com',
    contactDetails: {
      phone: '123-456-7890',
      address: '123 Elm St'
    },
    preferences: {
      newsletter: true,
      notifications: true
    }
  });

  const updateContactDetails = (phone, address) => {
    updateUserProfile(draft => {
      draft.contactDetails.phone = phone;
      draft.contactDetails.address = address;
    });
  };

  const toggleNewsletterSubscription = () => {
    updateUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile (Immer)</h2>

      <div>
        <label>Phone: </label>
        <input
          type="text"
          value={userProfile.contactDetails.phone}
          onChange={(e) => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
        />
      </div>

      <div>
        <label>Address: </label>
        <input
          type="text"
          value={userProfile.contactDetails.address}
          onChange={(e) => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={toggleNewsletterSubscription}>
          {userProfile.preferences.newsletter ? 'Unsubscribe from Newsletter' : 'Subscribe to Newsletter'}
        </button>
      </div>

      <pre style={{ marginTop: '20px', backgroundColor: '#eee', padding: '10px' }}>
        {JSON.stringify(userProfile, null, 2)}
      </pre>
    </div>
  );
};

export default UserProfileWithImmer;

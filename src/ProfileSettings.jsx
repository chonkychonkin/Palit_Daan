import { useState } from 'react';

const initialProfile = {
  name: 'Juan Dela Cruz',
  email: 'example_email@mail.com',
  address: '123 Palit Daan Street, Manila',
  mobile: '+63 912 345 6789',
  dietaryPreferences: 'No preferences',
  membership: 'Gold Member',
  joined: 'March 2024',
};

export default function ProfileSettings() {
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (key) => (event) => {
    setProfile((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSave = () => {
    alert('Profile settings saved successfully.');
  };

  const handleCancel = () => {
    setProfile(initialProfile);
  };

  return (
    <div style={pageWrapperStyle}>
      <div style={contentAreaStyle}>
        <header style={heroStyle}>
          <div>
            <p style={eyebrowStyle}>Account settings</p>
            <h1 style={heroTitleStyle}>Profile Settings</h1>
            <p style={heroCopyStyle}>
              Review and update your personal details, communication preferences, and membership information.
            </p>
          </div>
          <div style={heroActionsStyle}>
            <button type="button" onClick={handleCancel} style={ghostButtonStyle}>
              Reset
            </button>
            <button type="button" onClick={handleSave} style={primaryButtonStyle}>
              Save Changes
            </button>
          </div>
        </header>

        <div style={gridStyle}>
          <aside style={summaryCardStyle}>
            <div style={profileBadgeStyle}>
              <span style={profileInitialStyle}>JD</span>
            </div>
            <div>
              <p style={summaryLabelStyle}>Account holder</p>
              <h2 style={summaryTitleStyle}>{profile.name}</h2>
              <p style={summaryDetailStyle}>{profile.email}</p>
            </div>

            <div style={summaryBlocksStyle}>
              <div style={summaryBlockStyle}>
                <span style={summaryBlockTitle}>Member status</span>
                <span style={summaryBlockValue}>{profile.membership}</span>
              </div>
              <div style={summaryBlockStyle}>
                <span style={summaryBlockTitle}>Joined</span>
                <span style={summaryBlockValue}>{profile.joined}</span>
              </div>
            </div>

            <div style={infoListStyle}>
              <div>
                <span style={infoLabelStyle}>Phone</span>
                <p style={infoTextStyle}>{profile.mobile}</p>
              </div>
              <div>
                <span style={infoLabelStyle}>Address</span>
                <p style={infoTextStyle}>{profile.address}</p>
              </div>
              <div>
                <span style={infoLabelStyle}>Dietary note</span>
                <p style={infoTextStyle}>{profile.dietaryPreferences}</p>
              </div>
            </div>
          </aside>

          <main style={formCardStyle}>
            <section style={sectionStyle}>
              <div style={sectionHeaderStyle}>
                <div>
                  <h2 style={sectionTitleStyle}>Personal Information</h2>
                  <p style={sectionSubtitleStyle}>Update the information you share with the restaurant.</p>
                </div>
              </div>

              <div style={fieldGridStyle}>
                <label style={fieldWrapperStyle}>
                  <span style={fieldLabelStyle}>Full name</span>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={handleChange('name')}
                    style={inputStyle}
                  />
                </label>
                <label style={fieldWrapperStyle}>
                  <span style={fieldLabelStyle}>Email address</span>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={handleChange('email')}
                    style={inputStyle}
                  />
                </label>
                <label style={fieldWrapperStyle}>
                  <span style={fieldLabelStyle}>Phone number</span>
                  <input
                    type="tel"
                    value={profile.mobile}
                    onChange={handleChange('mobile')}
                    style={inputStyle}
                  />
                </label>
                <label style={fieldWrapperStyleFull}>
                  <span style={fieldLabelStyle}>Address</span>
                  <input
                    type="text"
                    value={profile.address}
                    onChange={handleChange('address')}
                    style={inputStyle}
                  />
                </label>
                <label style={fieldWrapperStyleFull}>
                  <span style={fieldLabelStyle}>Dietary preferences</span>
                  <textarea
                    rows={5}
                    value={profile.dietaryPreferences}
                    onChange={handleChange('dietaryPreferences')}
                    style={textareaStyle}
                  />
                </label>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

const pageWrapperStyle = {
  minHeight: 'calc(100vh - 74px)',
  width: '100%',
  padding: '30px 28px',
  background: 'linear-gradient(180deg, #f8f1ec 0%, #ffeedf 50%, #ffe4cd 100%)'
};

const contentAreaStyle = {
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto'
};

const heroStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px',
  marginBottom: '30px',
  flexWrap: 'wrap'
};

const eyebrowStyle = {
  margin: 0,
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#ff6a20'
};

const heroTitleStyle = {
  margin: '10px 0 12px',
  fontSize: '42px',
  lineHeight: '1.05',
  fontWeight: 800,
  color: '#2b2b2b'
};

const heroCopyStyle = {
  margin: 0,
  maxWidth: '720px',
  fontSize: '17px',
  color: '#51423a',
  lineHeight: '1.75'
};

const heroActionsStyle = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap'
};

const primaryButtonStyle = {
  background: '#ff6a1a',
  color: '#ffffff',
  border: 'none',
  borderRadius: '999px',
  padding: '14px 28px',
  fontSize: '15px',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 12px 30px rgba(255,106,26,0.24)',
};

const ghostButtonStyle = {
  background: 'rgba(255,255,255,0.9)',
  color: '#4a3e35',
  border: '1px solid rgba(74,62,53,0.16)',
  borderRadius: '999px',
  padding: '14px 26px',
  fontSize: '15px',
  fontWeight: 700,
  cursor: 'pointer'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '360px 1fr',
  gap: '30px'
};

const summaryCardStyle = {
  background: '#ffffff',
  borderRadius: '28px',
  padding: '32px',
  boxShadow: '0 22px 55px rgba(16, 24, 40, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
};

const profileBadgeStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #ff6a1a 0%, #ffb86c 100%)',
  display: 'grid',
  placeItems: 'center',
  boxShadow: '0 16px 30px rgba(255,106,26,0.2)'
};

const profileInitialStyle = {
  color: '#ffffff',
  fontSize: '34px',
  fontWeight: 800
};

const summaryLabelStyle = {
  margin: '0 0 4px',
  color: '#8f7562',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: '12px',
  fontWeight: 700
};

const summaryTitleStyle = {
  margin: '0 0 8px',
  fontSize: '28px',
  fontWeight: 800,
  color: '#1f1d1b'
};

const summaryDetailStyle = {
  margin: 0,
  color: '#6a5c50',
  fontSize: '15px',
  lineHeight: '1.75'
};

const summaryBlocksStyle = {
  display: 'grid',
  gap: '16px'
};

const summaryBlockStyle = {
  background: '#f8f1ec',
  borderRadius: '22px',
  padding: '18px 20px'
};

const summaryBlockTitle = {
  display: 'block',
  marginBottom: '6px',
  color: '#7e675a',
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.14em'
};

const summaryBlockValue = {
  color: '#2b2420',
  fontSize: '18px',
  fontWeight: 700
};

const infoListStyle = {
  display: 'grid',
  gap: '16px'
};

const infoLabelStyle = {
  margin: 0,
  color: '#8f7562',
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.14em'
};

const infoTextStyle = {
  margin: '6px 0 0',
  color: '#4d4238',
  fontSize: '15px',
  lineHeight: '1.7'
};

const formCardStyle = {
  background: '#ffffff',
  borderRadius: '28px',
  padding: '32px',
  boxShadow: '0 22px 55px rgba(16, 24, 40, 0.08)'
};

const sectionStyle = {
  display: 'grid',
  gap: '28px'
};

const sectionHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px'
};

const sectionTitleStyle = {
  margin: 0,
  fontSize: '24px',
  fontWeight: 800,
  color: '#2b2b2b'
};

const sectionSubtitleStyle = {
  margin: '10px 0 0',
  fontSize: '15px',
  color: '#6a5c50',
  lineHeight: '1.7'
};

const fieldGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px'
};

const fieldWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const fieldWrapperStyleFull = {
  gridColumn: '1 / -1',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const fieldLabelStyle = {
  margin: 0,
  color: '#4a4037',
  fontSize: '14px',
  fontWeight: 700
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '18px',
  border: '1px solid #e6d4c5',
  background: '#fcfaf7',
  color: '#3f332d',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box'
};

const textareaStyle = {
  width: '100%',
  minHeight: '150px',
  padding: '14px 16px',
  borderRadius: '18px',
  border: '1px solid #e6d4c5',
  background: '#fcfaf7',
  color: '#3f332d',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box',
  resize: 'vertical'
};

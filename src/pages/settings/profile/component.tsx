import Button from '../../../components/button';
import Checkbox from '../../../components/checkbox';
import Input from '../../../components/input';

const Profile = () => {
  return (
    <>
      <h3>Personal Information</h3>

      <Input name="fullName" label="Full Name" placeholder="" />
      <Input name="phone" label="Phone Number" placeholder="" />
      <Input name="phone" label="Email" placeholder="" />

      <h3>Change password</h3>
      <Input name="currentPassword" label="" placeholder="Current password" />
      <Input name="newPassword" label="" placeholder="New Password" />
      <Input
        name="confirmedPassword"
        label=""
        placeholder="Confirm New Password"
      />

      <h3>Two-Factor Authentication</h3>
      <Checkbox label="Two-Factor Authentication:" name="twoFactor" />
      <p>Enable two-factor authentication for added security.</p>

      <h3>Security Questions</h3>
      <p>Set up security questions for account recovery.</p>
      <Input
        name="securityQuestion1"
        label="Security Question 1:"
        placeholder="What is your mother's maiden name?"
      />
      <Input
        name="securityQuestion2"
        label="Security Question 2:"
        placeholder="What was the name of your first pet?"
      />

      <h3>Active Sessions</h3>
      <p>Manage your active sessions.</p>
      <ul>
        <li>
          Device 1 - Last active: 2023-10-01 12:00
          <Button icon="" text="End Session" className="primary" />
        </li>
        <li>
          Device 2 - Last active: 2023-10-02 14:00
          <Button icon="" text="End Session" className="primary" />
        </li>
        <li>
          Device 3 - Last active: 2023-10-03 16:00
          <Button icon="" text="End Session" className="primary" />
        </li>
      </ul>

      <h3>Account Recovery</h3>
      <p>Set up account recovery options.</p>
      <Input
        name="recoveryEmail"
        label="Recovery Email"
        placeholder="Enter recovery email"
      />
      <Input
        name="recoveryPhone"
        label="Recovery Phone"
        placeholder="Enter recovery phone number"
      />

      {/* <h3>Delete Account</h3> */}
      {/* <p>Are you sure you want to delete your account? This action cannot be undone.</p> */}
      <Button icon="" text="Delete Account" className="danger" />
    </>
  );
};

export default Profile;

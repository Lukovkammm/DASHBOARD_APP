import Button from '../../../components/button';
import Checkbox from '../../../components/checkbox';
import Selector from '../../../components/selector';

const Preferences = () => {
  return (
    <>
      <Selector name="theme" label="Theme" options={['Light', 'Dark']} />
      <Selector
        name="language"
        label="Language"
        options={['English', 'Russian']}
      />

      <Checkbox label="Notifications:" name="notifications" />
      <Checkbox label="Privacy Settings:" name="privacy" />

      <h3>Connected Accounts</h3>
      <p>Manage your connected accounts.</p>
      <ul>
        <li>
          Google Account
          <Button icon="" text="Disconnect" className="secondary" />
        </li>
        <li>
          Facebook Account
          <Button icon="" text="Disconnect" className="secondary" />
        </li>
      </ul>

      <h3>Data Export</h3>
      <p>Export your data.</p>
      <Button icon="" text="Export Data" className="primary" />
    </>
  );
};

export default Preferences;

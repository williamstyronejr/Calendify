import AccountForm from "../AccountForm";
import IntegrationForm from "../IntegrationForm";

export default function SettingsPages({
  params: { type },
}: {
  params: { type: string };
}) {
  return (
    <div className="">
      {type === "general" ? <AccountForm /> : null}
      {type === "integrations" ? <IntegrationForm /> : null}
    </div>
  );
}

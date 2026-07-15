import React from 'react';
import { FileQuestion, ServerCrash, WifiOff, Settings2, ShieldAlert, Lock, UserX, CalendarX, Link2Off, Trash2 } from 'lucide-react';
import SystemState from '../components/SystemState';

export function NotFoundPage() {
  return (
    <SystemState
      icon={FileQuestion}
      title="404 - Page Not Found"
      description="The page you are looking for doesn't exist or has been moved."
      actionText="Go to Homepage"
      actionLink="/"
      isFullPage={true}
      iconColor="text-brand-flame"
    />
  );
}

export function ServerErrorPage() {
  return (
    <SystemState
      icon={ServerCrash}
      title="500 - Internal Server Error"
      description="Something went wrong on our end. We're actively looking into it."
      actionText="Return Home"
      actionLink="/"
      isFullPage={true}
      iconColor="text-red-500"
    />
  );
}

export function OfflinePage() {
  return (
    <SystemState
      icon={WifiOff}
      title="You are Offline"
      description="Please check your internet connection and try again."
      actionText="Retry"
      actionLink="/"
      isFullPage={true}
      iconColor="text-gray-400"
    />
  );
}

export function MaintenancePage() {
  return (
    <SystemState
      icon={Settings2}
      title="Under Maintenance"
      description="We are currently upgrading KhelClan to bring you a better experience. We'll be back shortly."
      actionText="Check Status"
      actionLink="/status"
      isFullPage={true}
      iconColor="text-amber-500"
    />
  );
}

// Reusable States for specific embedded views

export function PermissionDeniedState() {
  return <SystemState icon={ShieldAlert} title="Permission Denied" description="You do not have the required permissions to view this content or perform this action." actionText="Go Back" actionLink="/" iconColor="text-red-500" />;
}

export function AuthRequiredState() {
  return <SystemState icon={Lock} title="Authentication Required" description="You must be logged in to view this content." actionText="Log In" actionLink="/login" secondaryActionText="Sign Up" secondaryActionLink="/signup" iconColor="text-blue-500" />;
}

export function DeletedGameState() {
  return <SystemState icon={Trash2} title="Game Deleted" description="This game has been deleted by the organizer and is no longer available." actionText="Find Other Games" actionLink="/play" iconColor="text-gray-400" />;
}

export function CancelledGameState() {
  return <SystemState icon={CalendarX} title="Game Cancelled" description="This game has been cancelled. Refunds will be issued automatically according to our policy." actionText="Find Other Games" actionLink="/play" iconColor="text-red-500" />;
}

export function SuspendedUserState() {
  return <SystemState icon={UserX} title="Account Suspended" description="This user has been suspended for violating our Community Guidelines." actionText="Read Guidelines" actionLink="/community-guidelines" iconColor="text-red-500" />;
}

export function PrivateProfileState() {
  return <SystemState icon={Lock} title="Private Profile" description="This player has chosen to keep their profile private." actionText="Back to Directory" actionLink="/players" iconColor="text-brand-forest" />;
}

export function InvalidInviteState() {
  return <SystemState icon={Link2Off} title="Invalid or Expired Invite" description="This invitation link is invalid or has already expired." actionText="Go to Dashboard" actionLink="/dashboard" iconColor="text-amber-500" />;
}

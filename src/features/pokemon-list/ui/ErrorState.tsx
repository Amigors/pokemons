import type { SerializedError } from "@reduxjs/toolkit";

type ErrorStateProps = {
  error: SerializedError | { status: number; data: unknown };
};

export const ErrorState = ({ error }: ErrorStateProps) => {
  if ("status" in error) {
    const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
    return (
      <div className="p-4 text-red-500">
        <div>An error has occurred:</div>
        <div>{errMsg}</div>
      </div>
    );
  }
  return <div className="p-4 text-red-500">{error.message}</div>;
};

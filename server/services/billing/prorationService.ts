export const starterprorationServiceItems = [
  { id: "starter-1", label: "Sample proration service record", status: "draft" },
  { id: "starter-2", label: "Another proration service record", status: "ready" },
];

export async function loadprorationServicePreview() {
  return Promise.resolve(starterprorationServiceItems);
}

export async function saveprorationServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The proration service workflow is intentionally unfinished in Subscription Proration Edge Case.",
  });
}

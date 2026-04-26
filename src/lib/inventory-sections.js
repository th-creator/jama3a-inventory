export const inventorySections = [
  { value: 'fourniture', label: 'Fourniture' },
  { value: 'bureaux', label: 'Bureaux' },
  { value: 'informatique', label: 'Informatique' },
  { value: 'technique', label: 'Technique' },
]

export function getInventorySectionLabel(value) {
  return inventorySections.find((section) => section.value === value)?.label ?? value
}

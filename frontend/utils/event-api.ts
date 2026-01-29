import type { Event } from '../app/types/event'

const API_URL = process.env.EXPO_PUBLIC_API_URL as string;

// all events
export async function fetchEvents() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}

export async function createEvent(event: Event) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  if (!res.ok) throw new Error('Failed to create event');
  return res.json();
}

export async function readEvent(id: number | string) {
  const res = await fetch(`${API_URL}${id}/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to fetch event');
  return res.json();
}

export async function updateEvent(id: number | string, event: Partial<Event>) {
  const res = await fetch(`${API_URL}${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  if (!res.ok) throw new Error('Failed to patch event');
  return res.json();
}

export async function deleteEvent(id: number | string) {
  const res = await fetch(`${API_URL}${id}/`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to delete event');
  return true;
}
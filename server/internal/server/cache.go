package server

import (
	"sync"
	"time"
)

type cacheItem struct {
	until time.Time
	data  []byte
}

type cacheStore struct {
	mu    sync.Mutex
	items map[string]cacheItem
}

func newCacheStore() *cacheStore {
	return &cacheStore{items: make(map[string]cacheItem)}
}

func (c *cacheStore) get(key string) ([]byte, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()

	item, ok := c.items[key]
	if !ok || time.Now().After(item.until) {
		delete(c.items, key)
		return nil, false
	}

	data := make([]byte, len(item.data))
	copy(data, item.data)
	return data, true
}

func (c *cacheStore) set(key string, data []byte, ttl time.Duration) {
	c.mu.Lock()
	defer c.mu.Unlock()

	stored := make([]byte, len(data))
	copy(stored, data)
	c.items[key] = cacheItem{until: time.Now().Add(ttl), data: stored}
}

func (c *cacheStore) clear() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.items = make(map[string]cacheItem)
}

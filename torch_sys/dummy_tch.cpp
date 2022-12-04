#include <stdint.h>
#include <stddef.h>

bool tch_write_stream_destructor(void *stream_ptr) { return true; }
bool tch_write_stream_write(void *stream_ptr, const uint8_t *buf, size_t size, size_t *out_size) { return true; }
bool tch_read_stream_destructor(void *stream_ptr)  { return true; }
bool tch_read_stream_stream_position(void *stream_ptr, uint64_t *pos)  { return true; }
bool tch_read_stream_seek_start(void *stream_ptr, uint64_t pos, uint64_t *new_pos)  { return true; }
bool tch_read_stream_seek_end(void *stream_ptr, int64_t pos, uint64_t *new_pos)  { return true; }
bool tch_read_stream_read(void *stream_ptr, uint8_t *buf, size_t size, size_t *new_pos)  { return true; }

class KoreanToken {
  constructor(text, pos, offset, length, stem, unknown = false) {
    this.text = text;
    this.pos = pos;
    this.offset = offset;
    this.length = length;
    this.stem = stem;
    this.unknown = unknown;
  }

  equals(other) {
    return (
      this.text === other.text &&
      this.pos === other.pos &&
      this.offset === other.offset &&
      this.length === other.length &&
      this.stem === other.stem &&
      this.unknown === other.unknown
    );
  }

  copyWithNewPos(pos) {
    return new KoreanToken(this.text, pos, this.offset, this.length, undefined, this.unknown);
  }
}

module.exports = {
  KoreanToken,
};

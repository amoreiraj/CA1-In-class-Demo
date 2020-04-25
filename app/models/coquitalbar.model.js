module.exports = mongoose => {
  const Coquitalbar = mongoose.model(
    "coquitalbar",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Coquitalbar = mongoose.model("coquitalbar", schema);
  return Coquitalbar;
};
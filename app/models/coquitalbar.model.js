/**
 * file that defines the schema for mongoose
 */
module.exports = mongoose => {
    const coquitalbar = mongoose.model(
        "coquitalbar",
        mongoose.Schema(
            {
                item: String,
                price: String,
                published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return coquitalbar;
  };
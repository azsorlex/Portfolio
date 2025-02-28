using MongoDB.Bson;
using MongoDB.Driver;

namespace Portfolio.Infrastructure.Extensions;

public static class MongoExtensions {
    public static async Task<bool> HasCollectionAsync(this IMongoDatabase db, string collectionName) {
        var filter = new BsonDocument("name", collectionName);
        var collections = await db.ListCollectionsAsync(new ListCollectionsOptions { Filter = filter });
        return await collections.AnyAsync();
    }
}
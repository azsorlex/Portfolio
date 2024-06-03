using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Portfolio.Domain.Enums
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ExperienceType
    {
        Work,
        Project
    }
}
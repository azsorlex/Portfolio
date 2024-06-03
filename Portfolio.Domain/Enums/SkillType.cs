using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Runtime.Serialization;

namespace Portfolio.Domain.Enums
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum SkillType
    {
        [EnumMember(Value = "Programming languages")]
        ProgrammingLanguages = 0,

        [EnumMember(Value = "Libraries, tools and frameworks")]
        LibrariesToolsAndFrameworks = 1,

        [EnumMember(Value = "Databases")]
        Databases = 2,

        [EnumMember(Value = "Operating systems and environments")]
        OperatingSystemsAndEnvironments = 3
    }
}
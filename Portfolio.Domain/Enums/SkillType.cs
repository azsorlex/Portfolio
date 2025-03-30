using System.Runtime.Serialization;

namespace Portfolio.Domain.Enums
{
    public enum SkillType
    {
        [EnumMember(Value = "Programming Languages")]
        Programming_Languages,

        [EnumMember(Value = "Libraries, Tools and Frameworks")]
        Libraries_Tools_and_Frameworks,

        [EnumMember(Value = "Databases")]
        Databases,

        [EnumMember(Value = "Platforms and Operating Systems")]
        Platforms_and_Operating_Systems
    }
}
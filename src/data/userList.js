const data = [
  {
    "name":"中国航天科技集团公司第五研究院",
    "case":"航天器五性一体化设计分析与管理案例",
    "a":"<div>航天五院作为多型航天器研制总体单位，近年来承担多型重点型号工程项目，研制周期缩短，型号研制任务重，通用质量特性要求高，特别是近年来航天器可回收技术的突破，对航天器通用质量特性技术提出了新的需求，急需技术手段工具的支撑。</div>",
    "b":[{'type':'text','content':'结合航天器等重点装备特点，以装备五性工作需求为牵引，集成五性工作管理、五性设计分析、五性试验验证及基础数据库，形成一体化设计分析与管理平台，五性工作管理系统将制定的五性工作计划数据下达至五性软件工具（包括：五性设计分析工具和五性试验验证工具），可靠性安全性管理平台提供标准及规范的数据案例提供给设计师进行五性设计分析工作。五性软件工具的结果储存在综合数据库中按照型号项目、阶段、类别进行管理。可靠性安全性管理平台对制定的五性工作状态进行管理和控制。'},
         {'type':'image','content':require('@/assets/images/module/1-1.png')},
         {'type':'image','content':require('@/assets/images/module/1-2.png')},
         {'type':'text','content':'平台集成的五性数据分析评估工具，为五性设计、分析、评估等各阶段各工作项目中'}],
    "c":"<div>通过本项目建设，形成面向航天器五性工作需求的一体化工作环境，满足航天器各阶段五性设计分析与管理工作项目要求，有效积累航天器寿命周期各阶段的五性信息，显著提高航天器各项工作的效率，支撑可靠性安全性决策，提升型号五性水平。</div>",

  },
  {
    "name":"中国兵器工业第202研究所",
    "case":"XX战车通用质量特性分析案例",
    "a":`<div>XX战车作为陆军防空兵重要武器装备，其通用质量特性水平的高低直接关系到作战任务的成功与否。CARMES平台以XX战车为对象，开展通用质量特性分析。</div>
         <div>通过开展XX战车的通用质量特性分析可分析权衡其通用质量特性要求，对XX战车武器系统开展其通用质量特性分析工作，包括以下2方面内容：</div>
         <ul>
          <li>定性要求分析</li>
          <div>XX战车通用质量特性定性要求分析，从平台定性要求库中选取相关的定性要求，参考相似装备及同类产品，作为战车的初步定性要求。</div>
          <li>定量要求分析</li>
          <div>XX战车通用质量特性定量要求分析，从满足装备执行任务能力出发，结合维修能力、保障能力、测试分析，确定通用质量特性综合要求，借助相似装备数据分配确定各层次通用质量特性指标要求，建立战车仿真分析方案，基于平台的仿真功能，分析方案是否满足装备通用质量特性综合要求，并最终确定战车通用质量特性定量指标。</div>
         </ul>`,
    "c":`<div>基于CARMES装备通用质量特性分析平台开展了针对XX战车的通用质量特性分析工作，给出了装备开展通用质量特性分析工作的工作流程及方法，同时验证了平台的工程实用性。</div>
         <div>平台为分析单位在不同阶段开展分析工作提供了工具，为机关单位进一步落实装备质量提升工作提供了支撑，同时，引入基于仿真的方法开展顶层指标的仿真，为验证指标分解分配的合理性，分析权衡各通用质量特性要素之间的关系提供了方法。基于平台开展通用质量特性分析工作对加强装备历史数据的收集积累工作，数据的准确性、完整性对分析结果的合理性具有重要影响，历史数据的管理功能，更好的实现装备通用质量特性数据的交互共享，为后续型号通用质量特性工作开展提供基础。</div>`
  },
  {
    "name":"中国船舶重工第七一五研究所",
    "case":"XX液冷源系统可靠性分析案例",
    "a":`<div>CARMES平台以XX液冷源系统为对象，开展通用质量特性分析工作。液冷源通过外循环海水与内循环冷媒水进行热交换，从而给其他负载（水冷发射机等）设备提供的低温冷媒水进行降温、冷却。液冷源冷媒水进出口位于机柜顶部。液冷源内部主要包括板式换热器、水泵、传感器组和电控箱等。海却水从液冷机柜侧方进入机柜，与冷媒水进行换热后从侧方流出。</div>
         <div>XX液冷源主要实现功能：</div>
         <ul>
          <li>液冷源通过外部循环海水进入机柜与内循环冷媒水进行换热，从而为其他设备提供循环冷源；</li>
          <li>内部循环冷媒水通过水泵加压后为其他机柜提供冷媒水；</li>
          <li>液冷源可检测循环冷媒水的温度、压力、流量等数据，并反馈给上位机；</li>
          <li>两台液冷源组成冷却系统，一台处于运行状态，另一台处于备份状态，当处于运行状态的液冷源出现故障时，向处于备份状态的液冷源发送启动信号，处于备份状态的液冷源启动工作。</li>
          </ul>`,
    "c":"<div>通过CARMES软件的系统树、RBD等模块，开展对液冷源开展可靠性建模等分析，对于已经有冗余设计的部件（两个液冷源单元互为备份），需要在设计和使用过程中，保障冗余设计的功能性和充分性。例如，设计时对涉及冗余和模式切换的关键元器件（如转换开关、出水比例阀和回水比例阀等），应提高产品质量、加强二次筛选，减少“出水/回水比例阀无法作动”、“转换开关无法切换工作模式”等导致冗余功能丧失的故障模式的可能性；使用时定期检查冗余功能的有效性，例如交替使用两个液冷源单元，出现冗余丧失这样的潜在故障时及时维修。</div>"
  },
  {
    "name":"中国兵器工业第203研究所",
    "case":"XX导弹可靠性与测试性分析案例"
  },
  {
    "name":"中国船舶重工集团第七二二研究所",
    "case":"编队网可靠性评估案例"
  },
  {
    "name":"中国电子科技集团公司第二十九研究所",
    "case":"电子对抗系统“六性-功能”一体化协同设计案例"
  },
  {
    "name":"中国航天科技集团公司第八研究院",
    "case":"卫星系统六性设计分析集成应用案例"
  },
  {
    "name":"中国航空研究院602研究所",
    "case":"某型直升机系统安全性分析应用案例"
  },
  {
    "name":"江苏省电力公司电力科学研究院",
    "case":"智能电表可靠性分析评估"
  }
]

export default data
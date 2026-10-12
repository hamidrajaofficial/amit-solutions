with open('src/components/services/SeoServicePage.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
skip = False
for i, line in enumerate(lines):
    if '{strategicSeoSolutions.map((item, idx) => {' in line:
        # replace the map loop block
        loop_code = """              {strategicSeoSolutions.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeStrategicTab === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveStrategicTab(idx)}
                    className={`flex flex-col items-center gap-2 pb-3.5 px-3 transition-all duration-200 cursor-pointer border-b-2 -mb-[2px] ${
                      isActive
                        ? 'border-[#0070F3] text-[#0070F3]'
                        : 'border-transparent text-slate-600 hover:text-[#0070F3]'
                    }`}
                  >
                    {/* Circle Icon Container */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? 'bg-[#0070F3] text-white shadow-sm ring-4 ring-[#0070F3]/20'
                          : 'bg-white text-[#0070F3] border border-sky-200/80 hover:border-[#0070F3]/50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Tab Label */}
                    <span className={`text-xs sm:text-[13px] whitespace-nowrap ${
                      isActive ? 'text-[#0070F3] font-bold' : 'text-slate-700 font-semibold'
                    }`}>
                      {item.name}
                    </span>
                  </button>
                );
              })}
"""
        new_lines.append(loop_code)
        skip = True
    elif skip and '{/* Tab Content Display Card */}' in line:
        skip = False
        new_lines.append(line)
    elif not skip:
        new_lines.append(line)

with open('src/components/services/SeoServicePage.tsx', 'w') as f:
    f.writelines(new_lines)

print('Successfully updated loop via Python script file!')

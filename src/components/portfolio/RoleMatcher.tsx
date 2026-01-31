import { useState, useMemo } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoleAttribute {
  id: string;
  label: string;
  category: string;
}

interface RoleMatcherProps {
  attributes: RoleAttribute[];
  matchingData: Record<string, string[]>;
}

const categoryColors: Record<string, string> = {
  growth: "bg-emerald-100 text-emerald-700 border-emerald-200",
  partnerships: "bg-blue-100 text-blue-700 border-blue-200",
  product: "bg-purple-100 text-purple-700 border-purple-200",
  leadership: "bg-amber-100 text-amber-700 border-amber-200",
  sales: "bg-rose-100 text-rose-700 border-rose-200",
  strategy: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

const RoleMatcher = ({ attributes, matchingData }: RoleMatcherProps) => {
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);

  const toggleAttribute = (id: string) => {
    setSelectedAttributes((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const matchScore = useMemo(() => {
    if (selectedAttributes.length === 0) return 0;

    let matchedCount = 0;
    selectedAttributes.forEach((attrId) => {
      if (matchingData[attrId] && matchingData[attrId].length > 0) {
        matchedCount++;
      }
    });

    return Math.round((matchedCount / selectedAttributes.length) * 100);
  }, [selectedAttributes, matchingData]);

  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-emerald-500";
    if (score >= 60) return "text-accent";
    if (score >= 40) return "text-amber-500";
    return "text-muted-foreground";
  };

  const getMatchMessage = (score: number) => {
    if (score >= 90) return "Exceptional Match!";
    if (score >= 80) return "Excellent Fit";
    if (score >= 60) return "Strong Alignment";
    if (score >= 40) return "Good Potential";
    return "Select attributes to see match";
  };

  return (
    <div className="bg-card rounded-2xl border border-border/50 p-6 lg:p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-display font-bold text-foreground">
            Role Compatibility Checker
          </h3>
          <p className="text-sm text-muted-foreground">
            Select desired role attributes to see how well they align
          </p>
        </div>
      </div>

      {/* Attributes Grid */}
      <div className="flex flex-wrap gap-2 mb-8">
        {attributes.map((attr) => {
          const isSelected = selectedAttributes.includes(attr.id);
          const colorClass = categoryColors[attr.category] || "bg-secondary text-secondary-foreground";

          return (
            <button
              key={attr.id}
              onClick={() => toggleAttribute(attr.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                isSelected
                  ? "bg-accent text-accent-foreground border-accent shadow-md scale-105"
                  : `${colorClass} hover:scale-105`
              }`}
            >
              {isSelected && <Check className="w-3.5 h-3.5" />}
              {attr.label}
            </button>
          );
        })}
      </div>

      {/* Match Score Display */}
      <div className="bg-secondary/50 rounded-xl p-6 text-center">
        <div className="mb-3">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            Compatibility Score
          </span>
        </div>

        <div className="relative mb-4">
          <div
            className={`text-6xl font-display font-bold transition-all duration-500 ${getMatchColor(matchScore)}`}
          >
            {selectedAttributes.length > 0 ? `${matchScore}%` : "—"}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-border rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-accent to-cyan-400 transition-all duration-500 ease-out"
            style={{ width: `${matchScore}%` }}
          />
        </div>

        <p className={`text-lg font-medium ${getMatchColor(matchScore)}`}>
          {getMatchMessage(matchScore)}
        </p>

        {selectedAttributes.length > 0 && (
          <p className="text-sm text-muted-foreground mt-2">
            {selectedAttributes.length} attribute{selectedAttributes.length > 1 ? "s" : ""} selected
          </p>
        )}
      </div>

      {/* Reset Button */}
      {selectedAttributes.length > 0 && (
        <Button
          variant="ghost"
          onClick={() => setSelectedAttributes([])}
          className="w-full mt-4 text-muted-foreground hover:text-foreground"
        >
          Reset Selection
        </Button>
      )}
    </div>
  );
};

export default RoleMatcher;

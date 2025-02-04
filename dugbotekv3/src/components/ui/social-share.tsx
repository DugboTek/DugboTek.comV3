import { TwitterIcon, FacebookIcon, LinkedinIcon, HeartIcon } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1 ${liked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}
      >
        <HeartIcon className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
        {likeCount > 0 && <span className="text-sm">{likeCount}</span>}
      </button>
      <button
        onClick={shareOnTwitter}
        className="text-gray-500 hover:text-blue-400 transition-colors"
      >
        <TwitterIcon className="w-5 h-5" />
      </button>
      <button
        onClick={shareOnFacebook}
        className="text-gray-500 hover:text-blue-600 transition-colors"
      >
        <FacebookIcon className="w-5 h-5" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="text-gray-500 hover:text-blue-700 transition-colors"
      >
        <LinkedinIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
